export const registerUser = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      return { success: true };
    } catch (error) {
      console.error("Error inserting data: ", error);
      return { success: false, error: "Internal Server Error" };
    }
  };
  