const queries = {
    addNewUser: `
        INSERT INTO users (
            email,
            password,
            firstName,
            lastName
        ) VALUES ($1, $2, $3, $4)
        RETURNING *
    `,
    addBooks: `
        INSERT INTO bookdetails (
            title,
            author
        ) VALUES ($1, $2)
        RETURNING *
    `,    
    getBooks: `
        SELECT * FROM bookdetails
        WHERE title=$1
    `,

    // getUserById: `
    // SELECT * FROM users
    // WHERE id=$1
    // `,

    // addBook: `
    // INSERT INTO inc(
    //     client_id, 
    //     incident_desc,
    //     city,
    //     country,
    //     weather_report
    // )
    // VALUES($1, $2, $3, $4, $5)
    // RETURNING *
    // `,

    // getIncidents: `
    //     SELECT *
    //     FROM incidents
    // `,

    // getUserIncidents: `
    //     SELECT * 
    //     FROM incidents
    //     WHERE client_id=$1
    // `,
    updatePassword: `
        Update users
        set password = $1,
        updated_at= NOW()
        where id = $2
        RETURNING *
    `
    }
    

module.exports = queries