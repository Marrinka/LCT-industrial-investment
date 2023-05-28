const getPatents = async (setPatents) => {
    fetch("http://localhost:3001/api/patents/")
        .then(result => result.json())
        .then(result => {
            console.log(result);
           setPatents(result);
        });
}

export default getPatents;