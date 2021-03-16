let renderDetail = (isFull) => {
    if (isFull) {
        return <p>Our mission at BelleVie is to enable everyone to live their best life, and we take the wellbeing of our people and the people we support very seriously. All of our products have been carefully selected by our Wellbeing experts to ensure we offer only the best quality, so you can buy in confidence.</p>;
    }
} 

let BvStamp = (props) => {
    return (
        <>
            <div className="bvApproved">
                <img alt="BelleVie Stamp of Approval" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEo2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjYwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iNjAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSI2MCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNjAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLjAiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLjAiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDMt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" /> 
                <p>BelleVie Stamp of Approval - trusted Product</p>
            </div>
            {renderDetail(props.isFull)}
        </>
    )
};

export default BvStamp;