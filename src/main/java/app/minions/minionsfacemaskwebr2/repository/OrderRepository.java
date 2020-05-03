package app.minions.minionsfacemaskwebr2.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import app.minions.minionsfacemaskwebr2.model.Order;

@Repository
public interface OrderRepository extends MongoRepository<Order, Long>{

}