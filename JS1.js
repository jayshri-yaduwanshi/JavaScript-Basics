
        const account_id = 11220
        let accountEmail = "jayshri@gmail.com"
        let accountPassword ="123456"
        accountCity ="Nagpur"
        let accountstate;
        // when we dont define variable it shows undefined in terminal

        // account_id =2

        console.log(account_id);

        accountEmail = "j@gmail.com"
        accountPassword ="212121"
        accountCity = "Bengluru"
        /*
        prefer not to use var because of issues in block scope and functional scope
        */

        console.log(account_id);

        console.table([account_id, accountEmail, accountPassword, accountCity, accountstate])