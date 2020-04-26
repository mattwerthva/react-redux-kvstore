/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";

import * as kvstoreActions from "../redux/actions/kvstoreActions";
import KvItemList from "./KvItemList";

class HomePage extends React.Component {
	constructor(props) {
		super(props);

		this.onKeyChange = this.onKeyChange.bind(this);
		this.onValueChange = this.onValueChange.bind(this);
		this.onGet = this.onGet.bind(this);
		this.onSet = this.onSet.bind(this);
	}

	componentDidMount() {
		const { actions } = this.props;

		actions.loadItems().catch((error) => {
			alert("Loading items failed. msg: " + error);
		});
	}

	onGet = () => {
		return this.props.actions
			.getItem(this.props.kvStore.kvItem.key)
			.then(() => {
				toast.success("Get complete.");
			})
			.catch((error) => {
				toast.error("Get failed. " + error.message, {
					autoClose: false,
				});
			});
	};

	onSet = () => {
		return this.props.actions
			.setItem(this.props.kvStore.kvItem)
			.then(() => {
				toast.success("Set complete.");
			})
			.catch((error) => {
				toast.error("Set failed. " + error.message, {
					autoClose: false,
				});
			});
	};

	onKeyChange = (event) => {
		this.props.actions.updateItem({
			key: event.target.value,
			value: this.props.kvStore.kvItem.value,
		});
	};

	onValueChange = (event) => {
		this.props.actions.updateItem({
			key: this.props.kvStore.kvItem.key,
			value: event.target.value,
		});
	};

	render() {
		return (
			<>
				<h1 className="center">React Redux KeyValue Store</h1>

				<div className="row p-2">
					<div className="col-2 ">
						<button
							className="form-control btn btn-primary m-1"
							onClick={this.onGet}
						>
							Get
						</button>
						<button
							className="form-control btn btn-primary m-1"
							onClick={this.onSet}
						>
							Set
						</button>
					</div>

					<div className="col-5 inline-block bg-secondary inline-block">
						<label>Key</label>
						<input
							type="text"
							placeholder="key"
							name="keyText"
							className="form-control"
							value={this.props.kvStore.kvItem.key}
							onChange={this.onKeyChange}
						/>
					</div>
					<div className="col-5 inline-block bg-secondary inline-block">
						<label>Value</label>
						<input
							type="text"
							placeholder="value"
							name="valueText"
							className="form-control"
							value={this.props.kvStore.kvItem.value}
							onChange={this.onValueChange}
						/>
					</div>
				</div>
				<KvItemList kvDict={this.props.kvStore.kvDict} />
			</>
		);
	}
}

HomePage.propTypes = {
	kvStore: PropTypes.object.isRequired,
	callsInProgress: PropTypes.number.isRequired,
	actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		kvStore: state.kvStore,
		callsInProgress: state.callsInProgress,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			loadItems: bindActionCreators(kvstoreActions.loadItems, dispatch),
			getItem: bindActionCreators(kvstoreActions.getItem, dispatch),
			setItem: bindActionCreators(kvstoreActions.setItem, dispatch),
			updateItem: bindActionCreators(kvstoreActions.updateItem, dispatch),
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
