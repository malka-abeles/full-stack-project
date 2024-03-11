const callflowers = ( drowflowers = () => {}) => {

    $.ajax({
        url:"../../data/data.json",
        success: ( result ) => {
            drowflowers(result);
        }
      });
      
}