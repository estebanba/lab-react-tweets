import Message from "./Message.js";
import ProfileImage from "./ProfileImage.js";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage tweet={tweet} />

      <div className="body">
        <div className="top">
          <User tweet={tweet} />

          <Timestamp tweet={tweet} />
        </div>

        <Message tweet={tweet} />

        <div className="actions">
          {/* Font Awesome icons */}
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
