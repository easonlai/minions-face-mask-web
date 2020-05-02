package app.minions.minionsfacemaskweb.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import app.minions.minionsfacemaskweb.model.Order;

@Repository
public interface OrderRepository extends MongoRepository<Order, Long>{

}