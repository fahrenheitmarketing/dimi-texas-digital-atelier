import { secrets } from "base44:runtime";

function escapeHtml(value) {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalize(value) {
  return Array.isArray(value) ? value.join(", ") : value;
}

function answerRow(label, value) {
  const display = normalize(value);
  const isEmpty = display === "" || display === null || display === undefined;
  return (
    "<tr>" +
    `<td style="padding:10px 12px;border:1px solid #eee;font-weight:600;color:#1b2541;width:42%;vertical-align:top;">${escapeHtml(label)}</td>` +
    `<td style="padding:10px 12px;border:1px solid #eee;color:#3f3f46;vertical-align:top;">${isEmpty ? "<span style='color:#9ca3af'>—</span>" : escapeHtml(display)}</td>` +
    "</tr>"
  );
}

export default async function(req) {
  try {
    const data = await req.json();
    const serviceName = data?.serviceName;
    const serviceKey = data?.serviceKey;
    const contact = data?.contact || {};
    const answers = Array.isArray(data?.answers) ? data.answers : [];
    const notes = data?.notes;

    if (
      !serviceName ||
      !contact.firstName ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      return Response.json(
        { error: "Missing required contact information." },
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

    const subject = `New ${serviceName} Quote Request — ${contact.firstName} ${contact.lastName}`;

    const rows = [
      answerRow("Service Requested", serviceName),
      answerRow("First Name", contact.firstName),
      answerRow("Last Name", contact.lastName),
      answerRow("Email", contact.email),
      answerRow("Phone", contact.phone),
      answerRow("Preferred Contact", contact.preferredContact),
      answerRow("Best Time to Reach", contact.bestTime),
      answerRow("Referral Source", contact.referralSource),
      ...answers.map((a) => answerRow(a.label, a.value)),
    ];
    if (notes) rows.push(answerRow("Additional Notes", notes));

    const attachments = Array.isArray(data?.attachments)
      ? data.attachments
          .filter((a) => a && a.url)
          .map((a, i) => ({
            filename: a.name || `attachment_${i + 1}`,
            path: a.url,
          }))
      : [];
    if (attachments.length) {
      rows.push(
        answerRow(
          "Attached Policies",
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
      `<h1 style="font-size:22px;margin:0 0 18px;">New ${escapeHtml(serviceName)} Quote Request</h1>` +
      '<table style="width:100%;border-collapse:collapse;font-size:14px;">' +
      rows.join("") +
      "</table>" +
      '<p style="margin-top:24px;font-size:12px;color:#94a3b8;">This quote request was submitted from the Diversified Insurance website. Reply directly to this email to reach the requester.</p>' +
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
        reply_to: contact.email,
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