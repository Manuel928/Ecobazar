import React from "react";
import Card from "../../components/Card";

const CreateAccount = () => {
  return (
    <div className="flex justify-center items-center">
      <Card
        width={520}
        heading={"Create Account"}
        borderRadius={8}
        height={400}
        btnText={"Create Account"}
      />
    </div>
  );
};

export default CreateAccount;
