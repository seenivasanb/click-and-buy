import { createContext } from "react";
import RootStore from "stores";

const RootContext = createContext<RootStore>({} as RootStore);

export default RootContext;