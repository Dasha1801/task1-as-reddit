const db = require("../models");
const Service = db.services;

exports.addService = (req, res) => {
  const service = {
    productId: req.body.productId,
    servicesName: req.body.servicesName,
    serviceId: req.body.serviceId,
    category: req.body.category,
  };

  Service.create(service)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Service.",
      });
    });
};

exports.findServices = (req, res) => {
  Service.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(">> Error while finding services: ", err);
    });
};

exports.deleteService = (req, res) => {
  const { serviceId } = req.body;

  Service.destroy({
    where: { serviceId: serviceId },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Service was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Service with id=${id}. Maybe Service was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Service with id=" + id,
      });
    });
};
