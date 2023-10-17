public class PangramChecker {
    public static void main(String[] args) {
        String sentence = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(sentence);
        System.out.println(isPangram ? "Pangram" : "Not a Pangram");
    }

    public static boolean isPangram(String sentence) {
        boolean[] alphabet = new boolean[26];
        int uniqueChars = 0;

        for (int i = 0; i < sentence.length(); i++) {
            char c = Character.toLowerCase(sentence.charAt(i));
            if ('a' <= c && c <= 'z' && !alphabet[c - 'a']) {
                alphabet[c - 'a'] = true;
                uniqueChars++;
            }

            if (uniqueChars == 26) {
                return true;  // All letters from 'a' to 'z' are present
            }
        }
        return false;
    }
}
