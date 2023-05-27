const gIndustries = async () => {
    const response = fetch("http://localhost:3001/api/industries/");

    console.log(response);
    const result = (await response).json();
    console.log(result);

    return result;
}

export default gIndustries;