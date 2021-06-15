class Url < ApplicationRecord
  # validates :short_url, presence: true

  extend FriendlyId
  friendly_id :short_url, use: [:finders]
  
  validates :long_url, presence: true, format: { with: /\A(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?\z/ }
  # wwww => autres possibilités + autres possibilités que wwww
  validates :short_url, format: { with: /\A[a-zA-Z0-9.\-#=]+\z/ }, uniqueness: true
end
