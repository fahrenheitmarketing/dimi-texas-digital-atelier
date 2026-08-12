export function escapeHtml(value) {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function normalize(value) {
  return Array.isArray(value) ? value.join(", ") : value;
}

export function answerRow(label, value) {
  const display = normalize(value);
  const isEmpty = display === "" || display === null || display === undefined;
  return (
    "<tr>" +
    `<td style="padding:10px 12px;border:1px solid #eee;font-weight:600;color:#1b2541;width:42%;vertical-align:top;">${escapeHtml(label)}</td>` +
    `<td style="padding:10px 12px;border:1px solid #eee;color:#3f3f46;vertical-align:top;">${isEmpty ? "<span style='color:#9ca3af'>—</span>" : escapeHtml(display)}</td>` +
    "</tr>"
  );
}