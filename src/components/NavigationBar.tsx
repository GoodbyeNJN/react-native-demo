import React from "react";
import PropTypes from "prop-types";
import { NavigationBar } from "beeshell";

import NavigationStackProp from "react-navigation-stack";

export default class extends React.Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired,
    };
}
