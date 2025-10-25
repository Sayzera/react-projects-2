import React, { use, useEffect, useState } from 'react'

function GetUsersFromApi() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        getUsers();
    }, [])



    const getUsers = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/usersasdas");                 // jsonplaceholder'dan veri çektim
            const data = await response.json();
            console.log(data, "data")                                                                   // çektiğim veriyi konsola basarak kontrol ettim
            setUsers(data);
        } catch (error) {
            console.log("error", error);

        } finally {
            setIsLoading(false);
        }                                                     // veriyi useState ile tanımladığım users değişkenine atadım
    }

    console.log(users, "users")
    if (!Array.isArray(users)) {
        return <div>Veri alınırken bir hata oluştu.</div>;
    }

    return (
        <div>
            <h2>Kullanıcı Listesi</h2>
            {isLoading ? (
                <p>Yükleniyor</p>
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.name}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default GetUsersFromApi