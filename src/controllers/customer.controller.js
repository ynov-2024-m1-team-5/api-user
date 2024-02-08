const { json } = require('sequelize');
const db = require('../models/index');

module.exports = {

    // controller pour récuperer tous les customers

    getCustomers: async(req, res) => {

        try {

            const customers = await db.Customer.findAll();
            if(customers.length === 0) {
                
                return res.status(404).json({
                    success: false,
                    message: "No customers found"
                });

            }

            return res.status(200).json({
                results: customers,
                success: true
            });


        } catch (err) {
            res.status(500).json({
                success: false,
                message: err.message
            });
        }

    },

    // controller  pour récupérer un customer
    getCustomer: async (req, res) => {

        try {
            if(isNaN(req.params.id)) {
                return res.status(400).json({
                    success: false,
                    message: "Bad request. No id provided"
                });
            }

            const customer = await db.Customer.findByPk(req.params.id);

            if(!customer) {
                return res.status(404).json({
                    success: false,
                    message: "Customer not found"
                });
            }

            return res.status(200).json({
                results: customer,
                success: true
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    },

    saveCustomer: async (req, res) => {

        const customer = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            zipcode: req.body.zipcode,
            city: req.body.city,
            phone: req.body.phone
        };

        console.log("CUSTOMER : "+JSON.stringify(req.body));

        try {
            
            

        
            await db.Customer.create(customer)

            .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while creating the Tutorial."
                });
              });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    },

    updateCustomer: async (req, res) => {
        const id = req.params.id;

        try {
            if(isNaN(id)) {
                return res.status(400).json({
                    success: false,
                    message: "Bad request. No id provided"
                });
            }

            await db.Customer.update(req.body, {
                where: {id: id}
            })

            .then(num => {
                if (num == 1) {
                  res.send({
                    message: "Customer was updated successfully."
                  });
                } else {
                  res.send({
                    message: `Cannot update Customer with id=${id}. Maybe Customer was not found or req.body is empty!`
                  });
                }
              })
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    },

    deleteCustomer: async (req, res) => {
        const id = req.params.id;

        try {
            if(isNaN(id)) {
                return res.status(400).json({
                    success: false,
                    message: "Bad request. No id provided"
                });
            }

            await db.Customer.destroy({
                where: {id: id}
            })

            .then(num => {
                if (num == 1) {
                  res.send({
                    message: "Customer was deleted successfully."
                  });
                } else {
                  res.send({
                    message: `Cannot delete Customer with id=${id}. Maybe Customer was not found !`
                  });
                }
              })
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    },





}