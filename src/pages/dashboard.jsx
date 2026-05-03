import Card from "../components/Card";
import Badge from "../components/Badge";
import Button from "../components/Button";

export default function Dashboard() {
  const recent = ["Resume.pdf", "Report.docx"];
  const files = [
    { name: "Notes.pdf", status: "Active" },
    { name: "Project.pdf", status: "Processed" },
    { name: "Design.pdf", status: "Pending" },
  ];

  return (
    <div>

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <Button>+ Upload New File</Button>
      </div>

      {/* RECENT SESSIONS */}
      <h2 className="text-lg font-semibold mb-3">Recent Sessions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {recent.map((item, i) => (
          <Card key={i}>
            <div className="p-4 bg-white dark:bg-gray-800 rounded shadow hover:shadow-md transition">
              📄 {item}
            </div>
          </Card>
        ))}
      </div>

      {/* FILE LIBRARY */}
      <h2 className="text-lg font-semibold mb-3">File Library</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {files.map((file, i) => (
          <Card key={i}>
            <div className="p-4 bg-white dark:bg-gray-800 rounded shadow hover:shadow-md transition">

              <div className="flex items-center justify-between">
                <span>📁 {file.name}</span>
                <Badge status={file.status} />
              </div>

            </div>
          </Card>
        ))}
      </div>

    </div>
  );
}