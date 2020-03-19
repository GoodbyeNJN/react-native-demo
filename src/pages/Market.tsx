import Counter from "@/components/Counter";

import { connect } from "react-redux";
import { AppState } from "@/store";
import { clear, decrease, increase, increaseAsync } from "@/store/counter/actions";

const mapStateToProps = (state: AppState) => ({ counter: state.counter });

const mapDispatchToProps = {
    clear,
    increase,
    decrease,
    increaseAsync,
};

const Market = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Market;
