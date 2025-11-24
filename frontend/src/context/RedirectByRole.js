export default function redirectByRole(role) {
  switch (role) {
    case "consumer":
      return "/userdashboard";

    case "admin":
      return "/admin_dashboard";

    case "helpdesk_assistant":
      return "/help_desk_dashboard";

    default:
      return "/login";
  }
}
