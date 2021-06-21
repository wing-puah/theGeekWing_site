import { state } from './reducer';

const shouldLoadText = (storeState: state): state["loadText"] => { return storeState.loadText; };

export { shouldLoadText };