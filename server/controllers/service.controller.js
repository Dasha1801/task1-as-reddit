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
      res.send("Услуга добавлена в корзину");
    })
    .catch((err) => {
      res.send("Что-то пошло не так, попробуйте еще раз");
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
        res.send("Услуга удалена");
      }
    })
    .catch((err) => {
      res.status(500).send("Что-то пошло не так, попробуйте еще раз");
    });
};
