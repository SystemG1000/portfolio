import icon from "../../public/favicon.ico"

export default function Head() {
    return (
      <>
        <title>Home</title>
        <link rel="shortcut icon" href={`${icon}`} type="image/x-icon"></link>
      </>
    );
  }