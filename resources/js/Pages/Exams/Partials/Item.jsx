import TextInput from "@/Components/TextInput";

export default function Item({ id, data, dispatcher }) {
  const item = data.find((e) => e.id === id);

  const handleChange = (e) => {
    const choiceId = parseInt(e.target.id.split("-").at(-1)) - 1;

    const updatedChoice = {
      ...item.choices[choiceId],
      content: e.target.value,
    };

    item.choices[choiceId] = updatedChoice;

    const newData = [
      ...data.filter((el) => {
        return el.id !== item.id;
      }),
      item,
    ];

    dispatcher(newData);
  };

  const setCorrect = (e) => {
    const choiceId = parseInt(e.target.id.split("-").at(-1)) - 1;

    const updatedChoice = {
      ...item.choices[choiceId],
      is_correct: true,
    };

    item.choices = item.choices.map((el) => {
      return { ...el, is_correct: false };
    });

    item.choices[choiceId] = updatedChoice;

    const newData = [
      ...data.filter((el) => {
        return el.id !== item.id;
      }),
      item,
    ];

    dispatcher(newData);
  };

  const setQuestion = (e) => {
    const newData = [
      ...data.filter((el) => {
        return el.id !== item.id;
      }),
      { ...item, question: e.target.value },
    ];

    dispatcher(newData);
  };

  return (
    <div className="grow bg-white p-4 shadow sm:rounded-lg sm:p-8">
      <TextInput
        placeholder="Untitled Question"
        value={item.question}
        onChange={setQuestion}
        className="mb-4 mt-1 block w-full max-w-xl"
      />

      <div className="mb-4 mt-2 flex max-w-xl items-center">
        <input
          id={`item-${id}-radio-1`}
          type="radio"
          name={`item-${id}`}
          onChange={setCorrect}
          className="mr-2 h-4 w-4 border-gray-300 bg-gray-100 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
        />
        <TextInput
          id={`item-${id}-option-1`}
          value={item.choices[0].content}
          onChange={handleChange}
          placeholder="Option 1"
          className="w-full"
          required
        />
      </div>

      <div className="mb-4 mt-2 flex max-w-xl items-center">
        <input
          id={`item-${id}-radio-2`}
          type="radio"
          name={`item-${id}`}
          onChange={setCorrect}
          className="mr-2 h-4 w-4 border-gray-300 bg-gray-100 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
        />
        <TextInput
          id={`item-${id}-option-2`}
          value={item.choices[1].content}
          onChange={handleChange}
          placeholder="Option 2"
          className="w-full"
          required
        />
      </div>

      <div className="mb-4 mt-2 flex max-w-xl items-center">
        <input
          id={`item-${id}-radio-3`}
          type="radio"
          name={`item-${id}`}
          onChange={setCorrect}
          className="mr-2 h-4 w-4 border-gray-300 bg-gray-100 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
        />
        <TextInput
          id={`item-${id}-option-3`}
          value={item.choices[2].content}
          onChange={handleChange}
          placeholder="Option 3"
          className="w-full"
          required
        />
      </div>

      <div className="mb-4 mt-2 flex max-w-xl items-center">
        <input
          id={`item-${id}-radio-4`}
          type="radio"
          name={`item-${id}`}
          onChange={setCorrect}
          className="mr-2 h-4 w-4 border-gray-300 bg-gray-100 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
        />
        <TextInput
          id={`item-${id}-option-4`}
          value={item.choices[3].content}
          onChange={handleChange}
          placeholder="Option 4"
          className="w-full"
          required
        />
      </div>
    </div>
  );
}
