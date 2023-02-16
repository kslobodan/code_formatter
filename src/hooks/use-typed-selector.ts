import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

export const useTypdSelector: TypedUseSelectorHook<RootState> = useSelector;
