import React from "react";
import PropTypes from "prop-types";

const KvItemList = ({ kvDict }) => (
	<table className="table table-hover">
		<thead className="thead-light">
			<tr>
				<th>Key</th>
				<th>Value</th>
			</tr>
		</thead>
		<tbody>
			{Object.keys(kvDict).map((key) => {
				return (
					<tr key={key}>
						<td>{key}</td>
						<td>{kvDict[key]}</td>
					</tr>
				);
			})}
		</tbody>
	</table>
);

KvItemList.propTypes = {
	kvDict: PropTypes.object.isRequired,
};

export default KvItemList;
