const gIndustries = async (setIndustries) => {
    fetch("http://localhost:3001/api/industries/")
        .then(result => result.json())
        .then(result => {
           setIndustries(result);
        });
}

export default gIndustries;