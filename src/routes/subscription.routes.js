import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ message: "GET all subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ message: `GET subscription with id ${req.params.id}` });
});

subscriptionRouter.post("/", (req, res) => {
  res.send({ message: "POST a new subscription" });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ message: `PUT subscription with id ${req.params.id}` });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ message: `DELETE subscription with id ${req.params.id}` });
});

subscriptionRouter.get("/users/:id", (req, res) => {
  res.send({ message: `GET subscriptions for user with id ${req.params.id}` });
});

subscriptionRouter.get("/:id/cancels", (req, res) => {
  res.send({
    message: `GET cancels for subscription with id ${req.params.id}`,
  });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ message: "GET upcoming renewals" });
});

export default subscriptionRouter;
