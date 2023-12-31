import { Draggable, Droppable } from "react-beautiful-dnd";
import { useBoardStore } from "@/store/BoardStore";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import TodoCard from "./TodoCard";
import { useModalStore } from "@/store/ModalStore";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};

const idToColumnText: { [key in TypedColumn]: string } = {
  todo: "To Do",
  inprogress: "In Progress",
  done: "Done",
};

function Column({ id, todos, index }: Props) {
  const { searchString, setTaskType } = useBoardStore((state) => state);
  const { openModal } = useModalStore((state) => state);

  const handleAddTodo = () => {
    setTaskType(id);
    openModal();
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {/* render droppable for todos */}
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-2 rounded-2xl shadow-sm transition-all ${
                  snapshot.isDraggingOver ? "bg-sky-200/50" : "bg-white/50"
                }`}
              >
                <h2 className="flex justify-between items-center font-bold text-lg mb-2">
                  {idToColumnText[id]}
                  <span className="flex items-center text-white bg-sky-400 rounded-full py-1 px-2 text-sm">
                    {!searchString
                      ? todos.length
                      : todos.filter((todo) =>
                          todo.title
                            .toLowerCase()
                            .includes(searchString.toLowerCase())
                        ).length}
                  </span>
                </h2>

                <div className="space-y-2">
                  {todos.map((todo, index) => {
                    if (
                      searchString &&
                      !todo.title
                        .toLocaleLowerCase()
                        .includes(searchString.toLocaleLowerCase())
                    )
                      return null;

                    return (
                      <Draggable
                        key={todo.$id}
                        draggableId={todo.$id}
                        index={index}
                      >
                        {(provided) => (
                          <TodoCard
                            todo={todo}
                            index={index}
                            id={id}
                            innerRef={provided.innerRef}
                            draggableProps={provided.draggableProps}
                            dragHandleProps={provided.dragHandleProps}
                          />
                        )}
                      </Draggable>
                    );
                  })}

                  {provided.placeholder}

                  <div className="flex items-end justify-end">
                    <button className="text-green-500 hover:text-green-600 transition-all">
                      <PlusCircleIcon
                        onClick={handleAddTodo}
                        className="h-10 w-10"
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}
export default Column;
