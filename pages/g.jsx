const [serverData, setServerData] = React.useState([])    React.useEffect(function () {            fetch("/api/vans")        .then(res => res.json())        .then(data => setServerData(data.vans))    }, [])         console.log(serverData)