export const AndConditionallyRendering = () => {

  const isLogging = false;

  return (
    <>
      {isLogging && <HomePage />}

      {
        isLogging ?  <HomePageContent /> : <LoginPage />
      }
    </>
  )






 
};


function HomePage() {
  return (
    <div>Home Page</div>
  )
}

function HomePageContent() {
  return (
    <div>Home Page Content</div>
  )
}

function LoginPage() {
  return (
    <div>Login Page</div>
  )
}
