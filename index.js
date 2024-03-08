const express = require("express")
const app = express();
const Electrician = require("./models/electrician");
const Site = require("./models/site")


app.use(express.json())

app.post('/electricians', (req, res) => {
    const { name, status, phoneNumber, address } = req.body;
    const electrician = new Electrician({
        name,
        status,
        phoneNumber,
        address
    })

    electrician.save();
    res.status(201).json(
        {
            message: "Electrician added successfully!!",
            data: electrician
        }
    )
});

app.post('/sites', (req, res) => {
    const { electrcianId, siteId } = req.params()
    const { date, status } = req.body;

    const site = new Site({
        siteId,
        date,
        status,
        assigned_electrician_id: electrcianId
    })

    res.status(201).json({
        message: "Electrician added successfully!!",
        data: site
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});