import Button from '../layout/Button.tsx';

function Csv() {
  return (
    <div>
      <div className="mb-10 mt-20 flex flex-col items-center text-sm">
        <Button color="bg-green-600" width="80px" text="Browse" type="button" />
        <div className="mt-6 flex gap-2">
          <p>
            <span className="text-blue-700">
              <strong>Filename:</strong>
            </span>
          </p>
          <p>/home/folder/filename.csv</p>
        </div>
      </div>
      <div className="text-center">
        <button
          className="w-72 rounded border-b-4 border-green-600 bg-blue-700 p-2 font-extrabold text-blue-50 hover:scale-110 hover:bg-opacity-80 hover:shadow-inner"
          type="button"
        >
          Load
        </button>
      </div>
    </div>
  );
}

export default Csv;
