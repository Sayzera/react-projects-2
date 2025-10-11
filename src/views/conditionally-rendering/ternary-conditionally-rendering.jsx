export const TernaryConditionallyRendering = () => {

  // eslint-disable-next-line no-unused-vars
  const isLogging = true;

  const type = "User";

  //    return isLogging ? (
  //         <div>
  //             Emre bey hoşgeldiniz
  //         </div>
  //     ) : (
  //         <div>
  //             Lütfen giriş yapmak için <a href="/">tıklayınız</a>
  //         </div>

  //     )

  return type === "Admin" ? (
    <div>Hoşgeldin Admin</div>
  ) : type === "SuperAdmin" ? (
    <div>Hoşgeldin SuperAdmin</div>
  ) : type === "User" ? (
    <div>Hoşgeldin User</div>
  ) : (
    <div>Tanımlanamadı</div>
  );

 
};
