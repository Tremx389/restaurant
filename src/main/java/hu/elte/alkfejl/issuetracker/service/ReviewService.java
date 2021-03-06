package hu.elte.alkfejl.issuetracker.service;

import hu.elte.alkfejl.issuetracker.model.Restaurant;
import hu.elte.alkfejl.issuetracker.model.Review;
import hu.elte.alkfejl.issuetracker.model.User;
import hu.elte.alkfejl.issuetracker.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    
    @Autowired
    private ReviewRepository reviewRepository;
    
    @Autowired
    private RestaurantService restaurantService;
    
    @Autowired
    private UserService userService;
    
    public Iterable<Review> reviews() {
        return reviewRepository.findAll();
    }
    
    public Review create(ReviewDto reviewDto) {
        
        Review rev = new Review();
        rev.setRating(reviewDto.getRating());
        Restaurant restaurant = restaurantService.read(reviewDto.getRestaurantId());
        User user = userService.getUser();
        
        if(null != restaurant){
            rev.setRestaurant(restaurant);
        }
        if(null != user){
            rev.setUser(user);
        }
        
        return reviewRepository.save(rev);
    }
    
    public Review read(int id) {
        return reviewRepository.findOne(id);
    }
    
    public void delete(int id) {
        reviewRepository.delete(id);
    }
    
    public Review update(int id, Review review, User user) {
        Review currentReview = reviewRepository.findOne(id);
        if (user.getId() == currentReview.getUser().getId()) {
            currentReview.setRating(review.getRating());
            currentReview.setRestaurant(review.getRestaurant());
            return reviewRepository.save(currentReview);
        } else {
            return currentReview;
        }
    }
}