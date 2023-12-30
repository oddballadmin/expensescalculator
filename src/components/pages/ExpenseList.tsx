import React from "react";
type listItemType = {
	name: string;
	price: number;
};
type listType = {
	items: listItemType[];
};
const ExpenseList: React.FC<listType> = ({ items }) => {
	return (
		<>
			<h2>List of Expenses</h2>

			<ul className="list">
				{items.map((item, index) => (
					<li className="list-item" key={index}>
						{item.name} - ${item.price}
					</li>
				))}
			</ul>
		</>
	);
};
export default ExpenseList;
