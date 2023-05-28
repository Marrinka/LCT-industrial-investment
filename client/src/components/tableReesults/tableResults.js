import "./tableResults.css";

const TableResults = () => {
	return (
		<>
			<div className="tableWrapper">
				<div className="tableHeading">
					Отчет о возможных затратах на открытие производственного
					предприятия в Москве
				</div>
			</div>
			<div className="table">
				<div className="row header">
					<div className="cell">Индустрия</div>
					<div className="cell">Тип организации</div>
					<div className="cell">Количество сотрудников</div>
					<div className="cell">Район расположения производства</div>
				</div>
                <div className="row">
					<div className="cell">Деревообрабатывающая</div>
					<div className="cell">Юридическое лицо</div>
					<div className="cell">50</div>
					<div className="cell">Северный административный округ (САО)</div>
				</div>
                <div className="row header">
					<div className="cell">Персонал</div>
					<div className="cell">Аренда объектов недвижимости</div>
					<div className="cell">Налоги</div>
					<div className="cell">Услуги</div>
				</div>
                <div className="row">
					<div className="cell">50</div>
					<div className="cell">20 532.99</div>
					<div className="cell">28 534</div>
					<div className="cell">Бухгалтерский учет</div>
				</div>
                <div className="row header">
					<div className="cell">Итого</div>
					<div className="cell">Планируемая численность персонала</div>
					<div className="cell">Страховые взносы (пенсионное страхование)</div>
					<div className="cell">Страховые взносы (медицинское страхование)</div>
				</div>
                <div className="row">
					<div className="cell">149 234</div>
					<div className="cell">50</div>
					<div className="cell">931 000</div>
					<div className="cell">110 000</div>
				</div>
			</div>
		</>
	);
};

export default TableResults;
