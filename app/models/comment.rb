class Comment < ActiveRecord::Base
  validates :comments, presence: true
  validates :body, presence: true
  belongs_to :article
end
