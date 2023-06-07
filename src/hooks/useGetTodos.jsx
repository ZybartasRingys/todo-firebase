import { useDispatch } from "react-redux";
import { collection, getDocs, doc, addDoc } from "firebase/firestore";
import { getTodos } from "../features/dataSlice";
import { db } from "../config/firebase";

export default function useGetTodos() {
  const dispatch = useDispatch();
  const docRef = collection(db, "todos");

  const fetchTodos = async () => {
    try {
      const todos = await getDocs(docRef);
      const data = todos.docs.map((todo) => ({
        ...todo.data(),
        id: todo.id,
      }));
      console.log(data);
      dispatch(getTodos(data));
    } catch (error) {
      console.log(error);
    }
  };

  const createTodo = async () => {
    try {
      const todo = await addDoc(docRef);
      const data = console.log(data);
      dispatch(createTodo(data));
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchTodos, createTodo };
}
