import TextInput from "@/Components/TextInput";
import { useState } from "react";

export default function Item({ data, name }) {
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState([
    { content: "", is_correct: false },
    { content: "", is_correct: false },
    { content: "", is_correct: false },
    { content: "", is_correct: false },
  ]);

  const handleChange = (e) => {
    e.target.id;
  };

  return (
    <div className="grow bg-white p-4 shadow sm:rounded-lg sm:p-8">
      <TextInput
        placeholder="Untitled Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="mb-4 mt-1 block w-full max-w-xl"
      />

      <div className="mb-4 mt-2 flex max-w-xl items-center">
        <input
          id="default-radio-1"
          type="radio"
          name={name}
          className="mr-2 h-4 w-4 border-gray-300 bg-gray-100 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
        />
        <TextInput
          id="option-1"
          placeholder="Option 1"
          value={choices[0].content}
          onChange={handleChange}
          className="w-full"
        />
      </div>

      <div className="mb-4 mt-2 flex max-w-xl items-center">
        <input
          id="default-radio-1"
          type="radio"
          name={name}
          className="mr-2 h-4 w-4 border-gray-300 bg-gray-100 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
        />
        <TextInput
          id="option-2"
          placeholder="Option 2"
          value={choices[1].content}
          onChange={handleChange}
          className="w-full"
        />
      </div>

      <div className="mb-4 mt-2 flex max-w-xl items-center">
        <input
          id="default-radio-1"
          type="radio"
          name={name}
          className="mr-2 h-4 w-4 border-gray-300 bg-gray-100 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
        />
        <TextInput
          id="option-3"
          placeholder="Option 3"
          value={choices[2].content}
          onChange={handleChange}
          className="w-full"
        />
      </div>

      <div className="mb-4 mt-2 flex max-w-xl items-center">
        <input
          id="default-radio-1"
          type="radio"
          name={name}
          className="mr-2 h-4 w-4 border-gray-300 bg-gray-100 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
        />
        <TextInput
          id="option-4"
          placeholder="Option 4"
          value={choices[3].content}
          onChange={handleChange}
          className="w-full"
        />
      </div>
    </div>
  );
}
