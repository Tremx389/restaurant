package hu.elte.alkfejl.restaurant.repository;

import hu.elte.alkfejl.restaurant.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @author Godzsák Dávid <godzsakdavid@gmail.com>
 */
@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

    Optional<User> findByUsername(String username);

    Optional<User> findByUsernameAndPassword(String username, String password);
}
