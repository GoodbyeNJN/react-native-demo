import { fetchData } from "@/store/fetch/actions";
import { AppState } from "@/store";

import { connect } from "react-redux";
import Topics from "@/components/Topics";

const mapStateToProps = (state: AppState) => ({ list: state.list });

const mapDispatchToProps = {
    fetchData,
};

const Discovery = connect(mapStateToProps, mapDispatchToProps)(Topics);
export default Discovery;
