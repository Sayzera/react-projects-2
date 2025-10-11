import { allRemoveLocalStorage, createLocalStorage, getLocalStorage, removeLocalStorage } from "../../utils/localstorage";




const LocalStoragePage = () => {


    const tempData = [
        {
            name: 'Sezer',
            age: 29,
        }
    ];





    return (
        <div>
            Local Storage Page2312312321313123
 
            <div>
                <button onClick={() => {
                    createLocalStorage('tempData',tempData)
                }}>LocalStorage Oluştur</button>
            </div>

            <div>
                  <button onClick={() => {
                    getLocalStorage('tempData')
                  }}>LocalStorage Getir</button>
            </div>

              <div>
                  <button onClick={removeLocalStorage}>LocalStorage Sil</button>
            </div>

            <div>
                  <button onClick={allRemoveLocalStorage}>LocalStorage Tümünü Sil</button>
            </div>
        </div>
    )
}

export default LocalStoragePage

