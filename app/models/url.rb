class Url < ApplicationRecord
  # validates :short_url, presence: true

  extend FriendlyId
  friendly_id :short_url, use: [:finders]
  
  validates :long_url, presence: true, format: { with: /\Ahttps?:\/\/(www\.)?[a-zA-Z0-9@:%_\-\+~#=]+\.[a-zA-Z0-9]{1,6}(\/([a-zA-Z0-9()@:%_\+\-.~#?&\/\/=]*))*\z/ }
  # wwww => autres possibilités + autres possibilités que wwww
  validates :short_url, format: { with: /\A[a-zA-Z0-9.\-#=]+\z/ }, uniqueness: true
end
