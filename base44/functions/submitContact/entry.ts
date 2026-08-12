import { secrets } from "base44:runtime";
import { escapeHtml, answerRow } from "../../shared/emailTable.ts";

export default async function(req) {
  try {
    const data = await req.json();
    const name = data?.name;
    const email = data?.email;
    const phone = data?.phone;
    const insuranceType = data?.insuranceType;
    const message = data?.message;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const apiKey = secrets.get("RESEND_API_KEY");
    const officeEmail = secrets.get("OFFICE_EMAIL");
    if (!apiKey || !officeEmail) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const attachments = Array.isArray(data?.attachments)
      ? data.attachments
          .filter((a) => a && a.url)
          .map((a, i) => ({
            filename: a.name || `attachment_${i + 1}`,
            path: a.url,
          }))
      : [];

    const subject = `New message from ${name} — Contact form`;

    const rows = [
      answerRow("Name", name),
      answerRow("Email", email),
      answerRow("Phone", phone),
      answerRow("Topic", insuranceType),
      answerRow("Message", message),
    ];
    if (attachments.length) {
      rows.push(
        answerRow(
          "Attached Files",
          attachments.map((a) => a.filename).join(", ")
        )
      );
    }

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/Chicago",
    });

    const html =
      '<div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;color:#1b2541;">' +
      `<p style="font-size:13px;color:#64748b;margin:0 0 4px;">Submitted ${escapeHtml(submittedAt)} (CT)</p>` +
      `<h1 style="font-size:22px;margin:0 0 18px;">New website message</h1>` +
      '<table style="width:100%;border-collapse:collapse;font-size:14px;">' +
      rows.join("") +
      "</table>" +
      '<p style="margin-top:24px;font-size:12px;color:#94a3b8;">Submitted from the Diversified Insurance contact page. Reply directly to this email to reach the sender.</p>' +
      "</div>";

    const sendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Diversified Insurance <${officeEmail}>`,
        to: ["matt@dimitexas.com"],
        reply_to: email,
        subject,
        html,
        ...(attachments.length ? { attachments } : {}),
      }),
    });

    if (!sendRes.ok) {
      const errText = await sendRes.text();
      return Response.json(
        { error: "Failed to send email.", details: errText },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}