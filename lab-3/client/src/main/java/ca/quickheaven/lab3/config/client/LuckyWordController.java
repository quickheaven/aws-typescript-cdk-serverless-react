package ca.quickheaven.lab3.config.client;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LuckyWordController {

    @Value("${lucky-word:preparation}")
    String luckyWord;

    @GetMapping("/lucky-word")
    public String showLuckyWord() {
        return "The luck word is: " + luckyWord;
    }
}
