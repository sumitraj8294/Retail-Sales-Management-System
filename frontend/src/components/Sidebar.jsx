export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Vault</h3>

      <ul>
        <li className="active">Dashboard</li>
        <li>Nexus</li>
        <li>Intake</li>

        <p className="sidebar-title">Services</p>
        <li>Pre-active</li>
        <li>Active</li>
        <li>Blocked</li>

        <p className="sidebar-title">Invoices</p>
        <li>Proforma</li>
        <li>Final</li>
      </ul>
    </div>
  );
}
