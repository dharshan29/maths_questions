import { MathJax } from "better-react-mathjax";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./style.css";

const Display = () => {
	const [number, setNumber] = useState(1);
	const [data, setData] = useState();
	const list = [
		{
			index: 1,
			id: "AreaUnderTheCurve_901",
		},
		{
			index: 2,
			id: "BinomialTheorem_901",
		},
		{
			index: 3,
			id: "DifferentialCalculus2_901",
		},
	];

	useEffect(() => {
		const fetchData = async () => {
			const item = list.find((item) => item.index === number);
			if (item) {
				try {
					const response = await fetch(
						`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${item.id}`
					);
					const data = await response.json();
					setData(data[0].Question);
				} catch (error) {
					alert("Error fetching data:", error);
				}
			}
		};

		fetchData();
	}, [number]);

	return (
		<div className="container">
			<nav>
				<button
					onClick={() => setNumber((prev) => prev - 1)}
					disabled={number === 1}
				>
					<IoIosArrowBack />
				</button>
				<button
					onClick={() => setNumber((prev) => prev + 1)}
					disabled={number === 3}
				>
					<IoIosArrowForward />
				</button>
			</nav>
			<div className="question">
				{data === undefined ? (
					<div className="loading">
						<span className="loader"></span>
					</div>
				) : (
					<div className="box">
						<strong>{number}.</strong>
						<MathJax>{data}</MathJax>
					</div>
				)}
			</div>
		</div>
	);
};

export default Display;
