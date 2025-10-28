import React from "react";
import Card from "../../components/Card";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center">
      <Card
        width={520}
        heading={"Sign In"}
        borderRadius={8}
        height={400}
        btnText={"Login"}
      />
    </div>
  );
};

export default SignIn;
