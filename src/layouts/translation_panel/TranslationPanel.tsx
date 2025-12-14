export default function TranslationList() {

  return (
    <div className="flex gap-4 w-full max-w-4xl mx-auto p-4">

      <div className="flex-1">
        <select className="w-full mb-2 p-2 border rounded bg-gray-100">
          <option>English</option>
          <option>Chinese</option>
        </select>

      </div>


      <div className="flex-1">
        <select className="w-full mb-2 p-2 border rounded bg-gray-100">
          <option>Vietnamese</option>
          <option>English</option>
        </select>

      </div>
    </div>
  );
}
